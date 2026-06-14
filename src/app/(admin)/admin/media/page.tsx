import MediaLibrary from '@/components/admin/media/media-library';
import PageHeader from '@/ui/page-header';

export const metadata = {
  title: 'Media',
};

export default function AdminMediaPage() {
  return (
    <>
      <PageHeader
        title="Media"
        description="Upload, browse, and remove images."
      />
      <MediaLibrary />
    </>
  );
}
