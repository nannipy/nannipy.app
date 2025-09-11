"use client";

import { projectItems } from "../../../lib/projects";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useCallback} from "react";
import { Octokit } from "octokit";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useSwipeable } from "react-swipeable";


function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const projectId = params?.projectId;
  const project = projectItems.find(
    (p) => p.id === projectId
  );
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (project?.github) {
      const octokit = new Octokit();
      const owner = project.github.split("/")[3];
      const repo = project.github.split("/")[4].replace(".git", "");

      octokit
        .request("GET /repos/{owner}/{repo}/readme", {
          owner,
          repo,
        })
        .then((response) => {
          const decodedContent = new TextDecoder().decode(Uint8Array.from(atob(response.data.content), c => c.charCodeAt(0)));
          const withImages = decodedContent.replace(/<img src="(?!https?:\/\/)(.*?)"/g, `<img src="https://raw.githubusercontent.com/${owner}/${repo}/master/$1"`);
          const sanitizedContent = DOMPurify.sanitize(withImages);
          setReadme(sanitizedContent);
        })
        .catch((error) => {
          console.error("Error fetching README:", error);
          setReadme("README not found.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [project]);

  const [selectedImage, setSelectedImage] = useState<{ src: string; index: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextImage = useCallback(() => {
    if (project?.screenshots && selectedImage) {
      const nextIndex = (selectedImage.index + 1) % project.screenshots.length;
      setSelectedImage({ src: project.screenshots[nextIndex], index: nextIndex });
    }
  }, [project?.screenshots, selectedImage]);

  const handlePrevImage = useCallback(() => {
    if (project?.screenshots && selectedImage) {
      const prevIndex = (selectedImage.index - 1 + project.screenshots.length) % project.screenshots.length;
      setSelectedImage({ src: project.screenshots[prevIndex], index: prevIndex });
    }
  }, [project?.screenshots, selectedImage]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen || !project?.screenshots) return;

      if (e.key === "ArrowLeft") {
        handlePrevImage(); 
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, project?.screenshots, handleNextImage, handlePrevImage]);

  const handlers = useSwipeable({
      onSwipedLeft: () => handleNextImage(),
      onSwipedRight: () => handlePrevImage(),
      trackMouse: true
    });

  

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen p-2 md:p-12 lg:p-16">
      <div className="max-w-full mx-auto">
        <div className="p-6 rounded-lg card">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-6">
            <h1 className="text-2xl font-bold tracking-tighter">
              {project.name}
            </h1>
            <div className="flex mt-4 md:mt-0 gap-4">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="group flex items-center transition-all duration-300">
                  <UpRightArrowIcon />
                  <p className="ml-2 h-7 relative">
                    Live
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  className="group flex items-center transition-all duration-300">
                  <GithubIcon />
                  <p className="ml-2 h-7 relative">
                    GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </Link>
              )}
            </div>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
        </div>
          {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-8 p-6 rounded-lg card">
            <h2 className="text-xl font-bold tracking-tighter mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-black cursor-pointer"
                  onClick={() => {
                  setSelectedImage({ src: screenshot, index });
                  setIsModalOpen(true);
                  }}
                >
                  <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  style={{ objectFit: project.id === "adm-sport-and-nutrition" ? "contain" : "cover" }}
                  className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setIsModalOpen(false)}
            {...handlers}
          >
            <div className="relative max-w-screen-lg max-h-screen-lg p-4" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-8 right-0 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black text-xl font-bold z-50"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <Image
                src={selectedImage.src}
                alt="Full screen screenshot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto', maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
                className="rounded-lg"
              />
              {project.screenshots && project.screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-black text-2xl font-bold opacity-75 hover:opacity-100 -translate-x-12 md:-translate-x-16"
                    onClick={handlePrevImage}
                  >
                    &#8249;
                  </button>
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-black text-2xl font-bold opacity-75 hover:opacity-100 translate-x-12 md:translate-x-16"
                    onClick={handleNextImage}
                  >
                    &#8250;
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        <div className="max-w-full prose dark:prose-invert mt-8 p-6 rounded-lg card markdown-body">
          {loading ? (
            <p>Loading README...</p>
          ) : (
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readme}</ReactMarkdown>
          )}
        </div>
        <div className="mt-8">
          <Link href="/" className="group flex items-center transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <p className="ml-2 h-7 relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <ThemeSwitcher />
      </div>
    </main>
  );
}