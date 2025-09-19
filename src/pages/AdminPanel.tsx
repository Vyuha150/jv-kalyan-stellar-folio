import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Image, 
  Calendar,
  Users,
  Briefcase,
  Award,
  Mic
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface AdminItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
  type?: string;
  link?: string;
  icon?: string;
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<AdminItem | null>(null);

  // Sample data for each section
  const [achievements, setAchievements] = useState<AdminItem[]>([
    {
      id: '1',
      title: 'Global Youth Leadership Award',
      description: 'Recognized for outstanding contribution to youth development programs worldwide',
      image: '/lovable-uploads/164345b8-1028-4af7-a957-a347aa2d7838.png'
    }
  ]);

  const [experiences, setExperiences] = useState<AdminItem[]>([
    {
      id: '1',
      title: 'Founder & CEO at Vyuha',
      description: 'Leading AI strategy and innovation initiatives',
      date: '2023 - Present',
      image: '/lovable-uploads/2f095c44-3825-450f-93df-96413c20c8d3.png'
    }
  ]);

  const [media, setMedia] = useState<AdminItem[]>([
    {
      id: '1',
      title: 'AI Revolution Podcast',
      description: 'Discussion on the future of artificial intelligence',
      type: 'Podcast',
      link: '#',
      image: '/lovable-uploads/36a177f7-a42b-4560-9f6a-f7c0031f7791.png'
    }
  ]);

  const [business, setBusiness] = useState<AdminItem[]>([
    {
      id: '1',
      title: 'Vyuha Tech Solutions',
      description: 'AI-powered enterprise solutions for modern businesses',
      image: '/lovable-uploads/4824763f-1eb6-4a9a-83bd-0f9dfac722a9.png'
    }
  ]);

  const handleEdit = (item: AdminItem) => {
    setEditingItem(item);
    setIsEditing(true);
  };

  const handleDelete = (id: string, section: string) => {
    switch (section) {
      case 'achievements':
        setAchievements(achievements.filter(item => item.id !== id));
        break;
      case 'experiences':
        setExperiences(experiences.filter(item => item.id !== id));
        break;
      case 'media':
        setMedia(media.filter(item => item.id !== id));
        break;
      case 'business':
        setBusiness(business.filter(item => item.id !== id));
        break;
    }
  };

  const handleSave = () => {
    // This would integrate with your backend
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleAddNew = () => {
    const newItem: AdminItem = {
      id: Date.now().toString(),
      title: 'New Item',
      description: 'Enter description...',
      image: ''
    };
    setEditingItem(newItem);
    setIsEditing(true);
  };

  const renderItemCard = (item: AdminItem, section: string) => (
    <Card key={item.id} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {item.image && (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{item.title}</h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
            {item.date && <Badge variant="secondary" className="mt-2">{item.date}</Badge>}
            {item.type && <Badge variant="outline" className="mt-2 ml-2">{item.type}</Badge>}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleEdit(item)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleDelete(item.id, section)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-muted-foreground mt-2">Manage your portfolio content and sections</p>
            </div>
            <Button onClick={handleAddNew} className="gap-2">
              <Plus className="w-4 h-4" />
              Add New Item
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="achievements" className="gap-2">
                <Award className="w-4 h-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="experiences" className="gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="media" className="gap-2">
                <Mic className="w-4 h-4" />
                Media
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-2">
                <Users className="w-4 h-4" />
                Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Achievement Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map(item => renderItemCard(item, 'achievements'))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experiences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Experience Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {experiences.map(item => renderItemCard(item, 'experiences'))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    Leadership Talks & Media
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {media.map(item => renderItemCard(item, 'media'))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Business Ventures
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {business.map(item => renderItemCard(item, 'business'))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Edit Modal */}
      {isEditing && editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Edit Item</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Image URL</label>
                <Input
                  value={editingItem.image || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                  placeholder="Enter image URL..."
                />
              </div>

              {activeTab === 'experiences' && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Date/Duration</label>
                  <Input
                    value={editingItem.date || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                    placeholder="e.g., 2023 - Present"
                  />
                </div>
              )}

              {activeTab === 'media' && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Type</label>
                    <Input
                      value={editingItem.type || ''}
                      onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value })}
                      placeholder="e.g., Podcast, Interview, Speaking"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Link</label>
                    <Input
                      value={editingItem.link || ''}
                      onChange={(e) => setEditingItem({ ...editingItem, link: e.target.value })}
                      placeholder="External link URL..."
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t">
              <Button onClick={handleSave} className="flex-1 gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;