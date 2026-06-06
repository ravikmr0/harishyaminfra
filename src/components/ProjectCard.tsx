import React from 'react';
import { ArrowUpRight, Download, FileText, Image as ImageIcon, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Project, ProjectDocument } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const previewMedia = project.media?.[0];
  const mediaCount = project.media?.length ?? 0;

  const getDocumentIcon = (type: ProjectDocument['type']) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'pdf':
      case 'document':
        return <FileText className="w-4 h-4" />;
      default:
        return <Download className="w-4 h-4" />;
    }
  };

  const getDocumentLabel = (type: ProjectDocument['type']) => {
    switch (type) {
      case 'video':
        return 'Video';
      case 'pdf':
        return 'PDF';
      case 'document':
        return 'Document';
      default:
        return 'File';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {(previewMedia || project.image) && (
        <button
          className="group relative block aspect-video w-full overflow-hidden bg-gray-100 text-left"
          onClick={() => navigate(`/project/${project.id}`)}
          type="button"
        >
          {previewMedia?.type === 'video' ? (
            <video
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              poster={previewMedia.poster ?? project.image}
              preload="metadata"
            >
              <source src={previewMedia.url} type="video/mp4" />
            </video>
          ) : (
            <img
              src={previewMedia?.url ?? project.image}
              alt={previewMedia?.title ?? project.title ?? project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1a2332] shadow-sm backdrop-blur">
              {previewMedia?.type === 'video' ? <Play className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
              {mediaCount || 1} Media
            </span>
          </div>
        </button>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        {project.phase && (
          <p className="text-amber-100 text-sm mt-1">{project.phase}</p>
        )}
        <p className="text-amber-100 mt-2 text-sm">{project.description}</p>
      </div>

      {/* Status Badge */}
      <div className="px-6 py-3 bg-gray-50 border-b">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'ongoing'
            ? 'bg-green-100 text-green-800'
            : project.status === 'completed'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </span>
      </div>

      {/* Documents */}
      <div className="p-6">
        {project.documents.length > 0 ? (
          <>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Available Documents</h4>
            <div className="space-y-2">
              {project.documents.slice(0, 3).map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  download={doc.filename}
                  className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors duration-200 group"
                >
                  <span className="text-amber-600 group-hover:text-amber-700 mr-3">
                    {getDocumentIcon(doc.type)}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{doc.title}</p>
                    <p className="text-xs text-gray-500">{getDocumentLabel(doc.type)}</p>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </a>
              ))}
            </div>
          </>
        ) : null}

        <Button
          className="mt-5 w-full bg-[#b26243] text-white hover:bg-[#8d4a33]"
          onClick={() => navigate(`/project/${project.id}`)}
          type="button"
        >
          View Project
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
