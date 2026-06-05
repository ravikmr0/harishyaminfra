import React from 'react';
import { Download, Play, FileText } from 'lucide-react';
import { Project, ProjectDocument } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Available Documents</h4>
        <div className="space-y-2">
          {project.documents.map((doc, index) => (
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
      </div>
    </div>
  );
};

export default ProjectCard;