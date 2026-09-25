import React, { useState, useEffect } from 'react';
import { Advertisement, AdPlacement, PageType } from '../types';
import { adService } from '../services/adService';
import { AdBanner } from './AdBanner';
import {
  Plus,
  Trash2,
  Edit3,
  Eye,
  MousePointerClick,
  TrendingUp,
  CheckCircle,
  XCircle,
  ExternalLink,
  Sparkles,
  RotateCcw,
  ArrowLeft,
  Image as ImageIcon,
  Layout,
  BookOpen,
  Layers,
  Save,
  X
} from 'lucide-react';

interface AdminPanelProps {
  onNavigate: (page: PageType, subTab?: string) => void;
}

const PRESET_IMAGES = [
  {
    label: 'Sacred Brass & Metalcraft',
    url: 'https://images.unsplash.com/photo-1599818816942-0268ec349479?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Eco Sustainable Architecture',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Timber & Classical Doors',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Natural Stone & Temple Courtyard',
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Handmade Terracotta & Bricks',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
];

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigate }) => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'paused'>('all');
  
  // Modal / Form state
  const [isEditing, setIsEditing] = useState(false);
  const [editingAdId, setEditingAdId] = useState<string | null>(null);

  // Form Fields
  const [formData, setFormData] = useState({
    clientName: '',
    title: '',
    tagline: '',
    description: '',
    imageUrl: PRESET_IMAGES[0].url,
    targetUrl: 'https://',
    ctaText: 'Learn More',
    badge: 'Sponsored Partner',
    placements: ['article-inline', 'article-sidebar', 'library-top'] as AdPlacement[],
    category: 'Architecture & Sacred Design',
    status: 'active' as 'active' | 'paused',
  });

  const [previewAd, setPreviewAd] = useState<Advertisement | null>(null);

  const loadAds = () => {
    const list = adService.getAll();
    setAds(list);
  };

  useEffect(() => {
    loadAds();
  }, []);

  // Update live preview whenever formData changes
  useEffect(() => {
    const temp: Advertisement = {
      id: editingAdId || 'preview-temp',
      clientName: formData.clientName || 'Client Name',
      title: formData.title || 'Advertisement Headline Goes Here',
      tagline: formData.tagline || 'Compelling summary of the client product or architectural service.',
      description: formData.description,
      imageUrl: formData.imageUrl,
      targetUrl: formData.targetUrl,
      ctaText: formData.ctaText || 'Learn More',
      badge: formData.badge || 'Sponsored Partner',
      placements: formData.placements,
      category: formData.category,
      status: formData.status,
      viewsCount: 120,
      clicksCount: 24,
      createdAt: new Date().toISOString(),
    };
    setPreviewAd(temp);
  }, [formData, editingAdId]);

  // Metrics
  const totalAds = ads.length;
  const activeAds = ads.filter((a) => a.status === 'active').length;
  const totalViews = ads.reduce((acc, curr) => acc + (curr.viewsCount || 0), 0);
  const totalClicks = ads.reduce((acc, curr) => acc + (curr.clicksCount || 0), 0);
  const averageCTR = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : '0.0';

  const handleOpenCreate = () => {
    setEditingAdId(null);
    setFormData({
      clientName: '',
      title: '',
      tagline: '',
      description: '',
      imageUrl: PRESET_IMAGES[0].url,
      targetUrl: 'https://example.com/client',
      ctaText: 'Explore Service',
      badge: 'Sponsored Partner',
      placements: ['article-inline', 'article-sidebar', 'library-top'],
      category: 'Sacred Materials & Architecture',
      status: 'active',
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (ad: Advertisement) => {
    setEditingAdId(ad.id);
    setFormData({
      clientName: ad.clientName,
      title: ad.title,
      tagline: ad.tagline,
      description: ad.description,
      imageUrl: ad.imageUrl,
      targetUrl: ad.targetUrl,
      ctaText: ad.ctaText,
      badge: ad.badge,
      placements: ad.placements,
      category: ad.category,
      status: ad.status,
    });
    setIsEditing(true);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.title.trim()) {
      alert('Please enter Client Name and Ad Title.');
      return;
    }

    if (editingAdId) {
      adService.update(editingAdId, formData);
    } else {
      adService.create(formData);
    }

    loadAds();
    setIsEditing(false);
    setEditingAdId(null);
  };

  const handleDelete = (id: string, clientName: string) => {
    if (window.confirm(`Are you sure you want to remove the advertisement for "${clientName}"?`)) {
      adService.delete(id);
      loadAds();
    }
  };

  const handleToggleStatus = (ad: Advertisement) => {
    const newStatus = ad.status === 'active' ? 'paused' : 'active';
    adService.update(ad.id, { status: newStatus });
    loadAds();
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all advertisements to default showcase clients?')) {
      adService.reset();
      loadAds();
    }
  };

  const togglePlacement = (placement: AdPlacement) => {
    setFormData((prev) => {
      const exists = prev.placements.includes(placement);
      if (exists) {
        return { ...prev, placements: prev.placements.filter((p) => p !== placement) };
      } else {
        return { ...prev, placements: [...prev.placements, placement] };
      }
    });
  };

  const filteredAds = ads.filter((ad) => {
    const matchesSearch =
      ad.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ? true : ad.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      {/* Top Header & Navigation Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-300/80 pb-6">
        <div>
          <button
            onClick={() => onNavigate('gyan-kosh')}
            className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-emerald-900 hover:text-emerald-950 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Vastu Gyan-Kosh Library</span>
          </button>
          <div className="flex items-center gap-2.5">
            <h1 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950">
              Advertisement Admin Console
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-serif font-bold">
              Admin Only
            </span>
          </div>
          <p className="font-['Marcellus'] text-sm sm:text-base text-stone-700 mt-1">
            Manage commercial client advertisements, in-article sponsored cards, placements, and performance metrics across the knowledgebase.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleResetDefaults}
            title="Reset to default client sample ads"
            className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-serif text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-stone-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Ads</span>
          </button>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-900 hover:to-emerald-950 text-amber-50 font-serif text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>New Client Advertisement</span>
          </button>
        </div>
      </div>

      {/* Analytics KPI Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-amber-300/80 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs font-serif mb-1">
            <span>Total Campaigns</span>
            <Layers className="w-4 h-4 text-amber-600" />
          </div>
          <div className="font-['Cinzel',serif] text-2xl font-bold text-stone-950">
            {totalAds}
          </div>
          <span className="text-[11px] text-stone-500">Configured ads</span>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 shadow-xs">
          <div className="flex items-center justify-between text-emerald-800 text-xs font-serif mb-1">
            <span>Active Live</span>
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-['Cinzel',serif] text-2xl font-bold text-emerald-950">
            {activeAds}
          </div>
          <span className="text-[11px] text-emerald-700 font-serif">Displaying to readers</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-300/80 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs font-serif mb-1">
            <span>Total Views (Impressions)</span>
            <Eye className="w-4 h-4 text-blue-600" />
          </div>
          <div className="font-['Cinzel',serif] text-2xl font-bold text-stone-950">
            {totalViews}
          </div>
          <span className="text-[11px] text-stone-500">Article reads & banners</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-300/80 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs font-serif mb-1">
            <span>Client Clicks</span>
            <MousePointerClick className="w-4 h-4 text-red-600" />
          </div>
          <div className="font-['Cinzel',serif] text-2xl font-bold text-red-900">
            {totalClicks}
          </div>
          <span className="text-[11px] text-stone-500">Redirected to client</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-300/80 shadow-xs col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-stone-500 text-xs font-serif mb-1">
            <span>Average CTR</span>
            <TrendingUp className="w-4 h-4 text-amber-600" />
          </div>
          <div className="font-['Cinzel',serif] text-2xl font-bold text-amber-900">
            {averageCTR}%
          </div>
          <span className="text-[11px] text-stone-500">Click-through rate</span>
        </div>
      </div>

      {/* In-Article Advertisement Showcase Preview Notice */}
      <div className="p-5 rounded-2xl bg-amber-100/70 border border-amber-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-800" />
            <h3 className="font-['Cinzel',serif] font-bold text-stone-950 text-sm sm:text-base">
              Client Ads in Articles & Treatises
            </h3>
          </div>
          <p className="font-['Marcellus'] text-xs sm:text-sm text-stone-700">
            When visitors read any Prakaran article (e.g., <em>Sun & Solar Geometry</em> or <em>Ayadi Shadvarga</em>), your active client advertisement appears naturally in the reading flow.
          </p>
        </div>

        <button
          onClick={() => onNavigate('gyan-kosh', 'prakaran')}
          className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-emerald-950 border border-emerald-700/80 font-serif text-xs font-bold shrink-0 shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>View Live Inside Article</span>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
        </button>
      </div>

      {/* Campaigns Listing & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="font-['Cinzel',serif] font-bold text-lg sm:text-xl text-stone-950">
              Active Client Campaigns ({filteredAds.length})
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search */}
            <input
              type="text"
              placeholder="Search client or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-amber-300 bg-white text-xs font-serif placeholder:text-stone-400 focus:outline-emerald-700 w-48 sm:w-60"
            />

            {/* Status Filter */}
            <div className="flex items-center bg-white rounded-xl border border-amber-300 p-0.5 text-xs font-serif">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'all' ? 'bg-amber-200 text-stone-900 font-bold' : 'text-stone-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'active' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-stone-600'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('paused')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  statusFilter === 'paused' ? 'bg-stone-200 text-stone-800 font-bold' : 'text-stone-600'
                }`}
              >
                Paused
              </button>
            </div>
          </div>
        </div>

        {/* Ad Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAds.map((ad) => {
            const ctr = ad.viewsCount > 0 ? ((ad.clicksCount / ad.viewsCount) * 100).toFixed(1) : '0.0';
            return (
              <div
                key={ad.id}
                className="bg-white rounded-2xl border-2 border-amber-300/80 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                {/* Status Indicator Stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    ad.status === 'active' ? 'bg-emerald-600' : 'bg-stone-300'
                  }`}
                />

                <div className="space-y-3">
                  {/* Top Row: Badge + Status Toggle */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[10px] font-serif font-bold uppercase tracking-wider bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-300">
                      {ad.badge}
                    </span>

                    <button
                      onClick={() => handleToggleStatus(ad)}
                      className={`text-xs px-2.5 py-1 rounded-full font-serif font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                        ad.status === 'active'
                          ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {ad.status === 'active' ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span>Active</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                          <span>Paused</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Thumbnail & Title */}
                  <div className="flex gap-3">
                    {ad.imageUrl && (
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-amber-200">
                        <img
                          src={ad.imageUrl}
                          alt={ad.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-serif font-bold text-stone-500 truncate">
                        {ad.clientName}
                      </div>
                      <h3 className="font-['Cinzel',serif] text-sm font-bold text-stone-950 leading-snug line-clamp-2">
                        {ad.title}
                      </h3>
                      <div className="text-[11px] text-amber-800 font-serif italic truncate mt-0.5">
                        {ad.category}
                      </div>
                    </div>
                  </div>

                  <p className="font-['Marcellus'] text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {ad.tagline || ad.description}
                  </p>

                  {/* Placements Badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {ad.placements.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-serif bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200"
                      >
                        {p === 'article-inline' && '📖 In-Article'}
                        {p === 'article-sidebar' && '📑 Sidebar'}
                        {p === 'library-top' && '🏛️ Library Top'}
                        {p === 'footer-banner' && '📌 Footer'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance & Action Footer */}
                <div className="pt-3 border-t border-stone-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-serif text-stone-600 bg-stone-50 p-2 rounded-xl">
                    <div>
                      <span className="text-stone-400 block text-[10px]">Views</span>
                      <strong className="text-stone-900">{ad.viewsCount}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">Clicks</span>
                      <strong className="text-red-900">{ad.clicksCount}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">CTR</span>
                      <strong className="text-emerald-900">{ctr}%</strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={ad.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-serif text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                    >
                      <span>Destination</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(ad)}
                        className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition-colors cursor-pointer"
                        title="Edit advertisement"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(ad.id, ad.clientName)}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
                        title="Delete advertisement"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAds.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-amber-300 space-y-3 font-serif">
            <p className="text-stone-500">No client advertisements match your filter.</p>
            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 rounded-xl bg-emerald-900 text-white text-xs font-bold cursor-pointer"
            >
              Create New Ad
            </button>
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-[#faf4e6] w-full max-w-4xl rounded-3xl border-2 border-amber-400 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto my-8 relative">
            <div className="flex items-center justify-between border-b border-amber-300/80 pb-4">
              <div>
                <span className="text-xs font-serif uppercase tracking-widest text-amber-900 font-bold">
                  {editingAdId ? 'Edit Client Campaign' : 'New Client Advertisement'}
                </span>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-black text-stone-950">
                  {editingAdId ? 'Update Advertisement Settings' : 'Create Sponsored Placement'}
                </h3>
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 rounded-full hover:bg-amber-200 text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Client / Sponsor Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sthapatya Shilp Studios"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Industry / Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sustainable Materials, Brass Craft, Architecture"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Ad Headline / Title */}
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Ad Headline / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Authentic Consecrated Brass Yantras & Sacred Metals"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Tagline / Subtitle */}
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Tagline (Visible in In-Article & Cards)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Handcrafted in accordance with classical Mayamatam proportions."
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Target URL */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Target Destination Link (URL) *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://example.com/client-catalogue"
                    value={formData.targetUrl}
                    onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Button CTA text */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    CTA Button Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Explore Catalogue, Contact Artisan"
                    value={formData.ctaText}
                    onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Badge Label */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Sponsor Badge Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sponsored Partner, Featured Artisan, Eco-Architecture Patron"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  />
                </div>

                {/* Status */}
                <div className="space-y-1">
                  <label className="text-xs font-serif font-bold text-stone-900">
                    Campaign Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'paused' })}
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                  >
                    <option value="active">Active (Visible to readers)</option>
                    <option value="paused">Paused (Draft / Inactive)</option>
                  </select>
                </div>
              </div>

              {/* Image URL with Preset Pickers */}
              <div className="space-y-2">
                <label className="text-xs font-serif font-bold text-stone-900">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-amber-300 bg-white text-xs font-serif focus:outline-emerald-700"
                />

                <div className="text-[11px] font-serif text-stone-500 pt-1">
                  Or pick from curated architectural presets:
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRESET_IMAGES.map((preset) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() => setFormData({ ...formData, imageUrl: preset.url })}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-serif cursor-pointer transition-all ${
                        formData.imageUrl === preset.url
                          ? 'bg-emerald-900 text-white border-emerald-950 font-bold'
                          : 'bg-white text-stone-700 border-amber-300 hover:bg-amber-100'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Placements Checklist */}
              <div className="space-y-2">
                <label className="text-xs font-serif font-bold text-stone-900 block">
                  Select Ad Placements on Website:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.placements.includes('article-inline')}
                      onChange={() => togglePlacement('article-inline')}
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <div>
                      <strong className="text-stone-900 block">In-Article Reading Flow (Primary)</strong>
                      <span className="text-stone-500 text-[11px]">Displays when readers view Prakaran articles</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.placements.includes('article-sidebar')}
                      onChange={() => togglePlacement('article-sidebar')}
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <div>
                      <strong className="text-stone-900 block">Article Sidebar</strong>
                      <span className="text-stone-500 text-[11px]">Compact card alongside treatises</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.placements.includes('library-top')}
                      onChange={() => togglePlacement('library-top')}
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <div>
                      <strong className="text-stone-900 block">Library Top Banner</strong>
                      <span className="text-stone-500 text-[11px]">Header strip on Gyan-Kosh Library</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.placements.includes('footer-banner')}
                      onChange={() => togglePlacement('footer-banner')}
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <div>
                      <strong className="text-stone-900 block">Footer Banner</strong>
                      <span className="text-stone-500 text-[11px]">Above global sacred footer</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Live Preview Inside Article Section */}
              <div className="space-y-2 pt-2 border-t border-amber-300/80">
                <span className="text-xs font-serif font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Live Preview of In-Article Sponsored Placement:</span>
                </span>
                {previewAd && (
                  <AdBanner placement="article-inline" customAd={previewAd} />
                )}
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-amber-300/80">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-serif text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-900 hover:to-emerald-950 text-amber-50 font-serif text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4 text-amber-300" />
                  <span>{editingAdId ? 'Save Campaign Changes' : 'Publish Advertisement'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
