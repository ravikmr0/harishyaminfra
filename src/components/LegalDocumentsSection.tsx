import React from 'react';
import { Download, FileText, Lock } from 'lucide-react';
import { LegalDocument } from '../data/projects';

interface LegalDocumentsSectionProps {
  documents: LegalDocument[];
}

const LegalDocumentsSection: React.FC<LegalDocumentsSectionProps> = ({ documents }) => {
  // Group documents by category
  const groupedDocs = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, LegalDocument[]>);

  return (
    <div className="mt-12 pt-12 border-t-2 border-gray-300">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Lock className="w-6 h-6 text-white" />
          <h2 className="text-3xl font-bold text-white">Legal Documents</h2>
        </div>
        <p className="text-purple-100 text-lg">
          Important legal documentation and land records for verification and compliance
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedDocs).map(([category, docs]) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-purple-300">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.map(doc => (
                <a
                  key={doc.id}
                  href={doc.url}
                  download
                  className="group bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="w-8 h-8 text-purple-600 group-hover:text-purple-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 mb-1 truncate">
                        {doc.title}
                      </h4>
                      {doc.dateAdded && (
                        <p className="text-xs text-gray-500 mb-3">
                          Added: {new Date(doc.dateAdded).toLocaleDateString()}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-purple-600 group-hover:text-purple-700 font-medium text-sm">
                        <Download className="w-4 h-4" />
                        Download
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verification Notice */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h4 className="font-semibold text-blue-900 mb-2">Document Verification</h4>
        <p className="text-blue-800 text-sm">
          All documents are verified and legally compliant. These records serve as official documentation for land ownership, 
          titles, and client testimonials. Please keep copies for your records.
        </p>
      </div>
    </div>
  );
};

export default LegalDocumentsSection;