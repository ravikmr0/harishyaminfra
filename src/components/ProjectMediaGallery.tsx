import { Image as ImageIcon, Play } from 'lucide-react';

import type { Project, ProjectMedia } from '@/data/projects';

interface ProjectMediaGalleryProps {
  project: Project;
}

function getProjectMedia(project: Project): ProjectMedia[] {
  if (project.media?.length) {
    return project.media;
  }

  const fallbackMedia: ProjectMedia[] = [];

  if (project.image) {
    fallbackMedia.push({
      title: project.title ?? project.name,
      type: 'image',
      url: project.image,
    });
  }

  project.documents
    .filter((document) => document.type === 'video')
    .forEach((document) => {
      fallbackMedia.push({
        title: document.title,
        type: 'video',
        url: document.url,
        poster: project.image,
      });
    });

  return fallbackMedia;
}

export default function ProjectMediaGallery({ project }: ProjectMediaGalleryProps) {
  const media = getProjectMedia(project);

  if (!media.length) {
    return null;
  }

  return (
    <section className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#f8f9fa] to-[#eef1f5] p-5 md:p-8">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b26243]">Project Media</p>
          <h3 className="mt-2 text-2xl font-bold text-[#1a2332] font-playfair">Images & Videos</h3>
        </div>
        <p className="text-sm text-gray-600">
          {media.length} item{media.length === 1 ? '' : 's'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {media.map((item, index) => (
          <article
            key={`${item.url}-${index}`}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video bg-gray-100">
              {item.type === 'video' ? (
                <video
                  className="h-full w-full object-cover"
                  controls
                  poster={item.poster}
                  preload="metadata"
                >
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}

              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1a2332] shadow-sm backdrop-blur">
                {item.type === 'video' ? <Play className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                {item.type === 'video' ? 'Video' : 'Image'}
              </span>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-[#1a2332]">{item.title}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
