import React from 'react';
import { 
  Code, Globe, Database, Cloud, Settings, 
  Calendar, MapPin, Building2, Github, ExternalLink,
  Award, Users, Zap, Shield, Layers
} from 'lucide-react';
import { 
  FaGoogle, FaUniversity, FaBuilding, FaReact, FaNodeJs, FaJava, FaPython,
  FaDocker, FaAws, FaMicrosoft, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiSharp,
  SiDotnet, SiMongodb, SiRedis, SiKubernetes, SiDocker,
  SiPostgresql, SiMysql, SiGraphql, SiApachekafka, SiJenkins,
  SiAndroidstudio, SiGit, SiGithub, SiGitlab
} from 'react-icons/si';
import { ASSETS } from '@/config/portfolio';

// Company Assets Configuration
export const CompanyAssets = {
  // Company logos (when available)
  logos: {
    "Google Summer of Code": ASSETS.images.companies.google,
  },
  // Fallback icons for companies without logos
  icons: {
    "Google Summer of Code": <FaBuilding className="h-5 w-5 text-blue-500" />,
    "Northeastern University": <FaUniversity className="h-5 w-5 text-red-600" />,
    "Bracebridge Capital": <FaBuilding className="h-5 w-5 text-blue-600" />,
    "HA Brick": <FaBuilding className="h-5 w-5 text-orange-500" />,
    "GEP Worldwide": <FaBuilding className="h-5 w-5 text-green-600" />
  }
};

// Legacy CompanyIcons export for backward compatibility
export const CompanyIcons = CompanyAssets.icons;

// Technology Icons
export const TechIcons = {
  // Languages
  "C#": <SiSharp className="h-4 w-4 text-purple-600" />,
  "Java": <FaJava className="h-4 w-4 text-red-500" />,
  "Python": <FaPython className="h-4 w-4 text-yellow-500" />,
  "TypeScript": <SiTypescript className="h-4 w-4 text-blue-600" />,
  "JavaScript": <SiJavascript className="h-4 w-4 text-yellow-400" />,
  "C++": <Code className="h-4 w-4 text-blue-500" />,
  
  // Frameworks
  ".NET": <SiDotnet className="h-4 w-4 text-purple-600" />,
  "React": <FaReact className="h-4 w-4 text-cyan-500" />,
  "Node.js": <FaNodeJs className="h-4 w-4 text-green-600" />,
  
  // Databases
  "MongoDB": <SiMongodb className="h-4 w-4 text-green-600" />,
  "PostgreSQL": <SiPostgresql className="h-4 w-4 text-blue-600" />,
  "MySQL": <SiMysql className="h-4 w-4 text-orange-500" />,
  "Redis": <SiRedis className="h-4 w-4 text-red-500" />,
  
  // Cloud & DevOps
  "Docker": <SiDocker className="h-4 w-4 text-blue-500" />,
  "Kubernetes": <SiKubernetes className="h-4 w-4 text-blue-600" />,
  "Azure": <FaMicrosoft className="h-4 w-4 text-blue-500" />,
  "AWS": <FaAws className="h-4 w-4 text-orange-500" />,
  "Apache Kafka": <SiApachekafka className="h-4 w-4 text-black" />,
  
  // Tools
  "Git": <SiGit className="h-4 w-4 text-orange-500" />,
  "GitHub": <SiGithub className="h-4 w-4 text-gray-800" />,
  "GitLab": <SiGitlab className="h-4 w-4 text-orange-500" />,
  "Jenkins": <SiJenkins className="h-4 w-4 text-red-500" />,
  "Android Studio": <SiAndroidstudio className="h-4 w-4 text-green-600" />,
  "Visual Studio": <FaMicrosoft className="h-4 w-4 text-blue-500" />,
  "GraphQL": <SiGraphql className="h-4 w-4 text-pink-500" />
};

// Category Icons
export const CategoryIcons = {
  "Languages": <Code className="h-5 w-5" />,
  "Web & Frameworks": <Globe className="h-5 w-5" />,
  "Databases": <Database className="h-5 w-5" />,
  "Cloud Native": <Cloud className="h-5 w-5" />,
  "Tools": <Settings className="h-5 w-5" />,
  "Experience": <Building2 className="h-5 w-5" />,
  "Projects": <Layers className="h-5 w-5" />,
  "Education": <Award className="h-5 w-5" />,
  "Skills": <Zap className="h-5 w-5" />
};

// Social Icons
export const SocialIcons = {
  "GitHub": <FaGithub className="h-5 w-5" />,
  "LinkedIn": <FaLinkedin className="h-5 w-5 text-blue-600" />,
  "Twitter": <FaTwitter className="h-5 w-5 text-blue-400" />
};

// Utility Icons
export const UtilityIcons = {
  "Calendar": <Calendar className="h-4 w-4" />,
  "Location": <MapPin className="h-4 w-4" />,
  "External Link": <ExternalLink className="h-4 w-4" />,
  "GitHub": <Github className="h-4 w-4" />
};

// Icon Component Props
interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Generic Icon Component
export const Icon: React.FC<IconProps> = ({ name, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const icon = (TechIcons as any)[name] || (CompanyIcons as any)[name] || (CategoryIcons as any)[name] || (SocialIcons as any)[name] || (UtilityIcons as any)[name];
  
  if (!icon) {
    return <Code className={`${sizeClasses[size]} ${className}`} />;
  }

  return React.cloneElement(icon as React.ReactElement, {
    className: `${sizeClasses[size]} ${className}`
  });
};

// Company Icon Component
export const CompanyIcon: React.FC<{ 
  company: string; 
  className?: string; 
  useLogo?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ company, className = '', useLogo = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const logoUrl = useLogo ? (CompanyAssets.logos as any)[company] : null;
  const icon = (CompanyAssets.icons as any)[company];

  // Use logo if available and requested
  if (logoUrl && useLogo) {
    return (
      <div className={`flex items-center justify-center ${sizeClasses[size]} rounded-lg bg-muted/50 overflow-hidden ${className}`}>
        <img 
          src={logoUrl} 
          alt={`${company} logo`}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Fallback to icon
  return icon ? (
    <div className={`flex items-center justify-center ${sizeClasses[size]} rounded-lg bg-muted/50 ${className}`}>
      {icon}
    </div>
  ) : (
    <div className={`flex items-center justify-center ${sizeClasses[size]} rounded-lg bg-muted/50 ${className}`}>
      <Building2 className="h-5 w-5 text-muted-foreground" />
    </div>
  );
};

// Tech Icon Component
export const TechIcon: React.FC<{ tech: string; className?: string }> = ({ tech, className = '' }) => {
  const icon = (TechIcons as any)[tech];
  return icon ? (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {icon}
      <span>{tech}</span>
    </span>
  ) : (
    <span className={className}>{tech}</span>
  );
};

export default Icon;
