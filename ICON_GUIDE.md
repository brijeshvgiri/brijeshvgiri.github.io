# Icon Usage Guide for Portfolio

This guide explains how to add and use icons throughout your portfolio website.

## Available Icon Libraries

### 1. **Lucide React** (Primary)
- Modern, consistent icon set
- Already imported in most components
- Great for UI elements, actions, and categories

### 2. **React Icons** (Secondary)
- Comprehensive collection including brand icons
- Includes Font Awesome, Simple Icons, and more
- Perfect for company logos and technology icons

## Icon System Components

### Core Components

#### `IconSystem.tsx`
Centralized icon management with predefined mappings:

```typescript
import { CompanyIcon, TechIcon, Icon } from "@/components/IconSystem";

// Company icons
<CompanyIcon company="Google" />

// Technology icons
<TechIcon tech="React" />

// Generic icons
<Icon name="Calendar" size="md" />
```

### Icon Categories

#### 1. **Company Icons**
```typescript
const CompanyIcons = {
  "Google": <FaGoogle className="h-5 w-5 text-blue-500" />,
  "Northeastern University": <SiNortheastern className="h-5 w-5 text-red-600" />,
  "Bracebridge Capital": <SiBracebridge className="h-5 w-5 text-blue-600" />,
  // Add more companies as needed
};
```

#### 2. **Technology Icons**
```typescript
const TechIcons = {
  "React": <FaReact className="h-4 w-4 text-cyan-500" />,
  "TypeScript": <SiTypescript className="h-4 w-4 text-blue-600" />,
  "Docker": <SiDocker className="h-4 w-4 text-blue-500" />,
  // Add more technologies as needed
};
```

#### 3. **Category Icons**
```typescript
const CategoryIcons = {
  "Languages": <Code className="h-5 w-5" />,
  "Web & Frameworks": <Globe className="h-5 w-5" />,
  "Databases": <Database className="h-5 w-5" />,
  // Add more categories as needed
};
```

## How to Add New Icons

### 1. **Adding Company Icons**

1. Find the company's icon in React Icons:
   ```bash
   # Search for company icons
   npm search react-icons | grep -i "company-name"
   ```

2. Import the icon:
   ```typescript
   import { FaCompanyName } from "react-icons/fa";
   // or
   import { SiCompanyName } from "react-icons/si";
   ```

3. Add to CompanyIcons mapping:
   ```typescript
   "Company Name": <FaCompanyName className="h-5 w-5 text-brand-color" />,
   ```

### 2. **Adding Technology Icons**

1. Find the technology icon:
   ```typescript
   import { SiTechnologyName } from "react-icons/si";
   ```

2. Add to TechIcons mapping:
   ```typescript
   "Technology Name": <SiTechnologyName className="h-4 w-4 text-brand-color" />,
   ```

### 3. **Adding Custom Icons**

For icons not available in libraries:

1. Add SVG to your assets folder
2. Create a React component:
   ```typescript
   const CustomIcon = ({ className }: { className?: string }) => (
     <svg className={className} viewBox="0 0 24 24">
       {/* SVG content */}
     </svg>
   );
   ```

3. Add to appropriate mapping in IconSystem.tsx

## Usage Examples

### Experience Section
```typescript
// Company icon with name
<div className="flex items-center gap-3">
  <CompanyIcon company="Google" />
  <h4 className="text-lg font-medium text-primary">Google</h4>
</div>
```

### Skills Section
```typescript
// Technology badge with icon
<Badge className="flex items-center gap-1">
  <TechIcon tech="React" />
</Badge>
```

### Projects Section
```typescript
// Project type icon
<div className="flex items-center gap-3">
  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50">
    <Star className="h-5 w-5 text-yellow-500" />
  </div>
  <CardTitle>{project.title}</CardTitle>
</div>
```

## Best Practices

### 1. **Consistent Sizing**
- Use standard sizes: `h-4 w-4` (small), `h-5 w-5` (medium), `h-6 w-6` (large)
- Maintain consistent sizing within the same context

### 2. **Color Consistency**
- Use brand colors for company icons
- Use semantic colors for technology icons
- Maintain theme compatibility (light/dark mode)

### 3. **Accessibility**
- Always provide meaningful alt text or aria-labels
- Ensure sufficient color contrast
- Use icons to enhance, not replace, text

### 4. **Performance**
- Icons are tree-shaken automatically
- Only import icons you actually use
- Consider lazy loading for large icon sets

## Icon Sources

### Free Icon Libraries
- **Lucide React**: https://lucide.dev/
- **React Icons**: https://react-icons.github.io/react-icons/
- **Heroicons**: https://heroicons.com/
- **Feather Icons**: https://feathericons.com/

### Brand Icons
- **Simple Icons**: https://simpleicons.org/
- **Font Awesome**: https://fontawesome.com/
- **Company Official Assets**: Check company's brand guidelines

## Troubleshooting

### Common Issues

1. **Icon not displaying**
   - Check import path
   - Verify icon name spelling
   - Ensure proper React Icons version

2. **Icon too large/small**
   - Adjust className with Tailwind size classes
   - Use consistent sizing patterns

3. **Color not applying**
   - Check if icon supports className prop
   - Verify Tailwind color classes
   - Test in both light and dark modes

### Adding New Companies

1. **Research the company's brand guidelines**
2. **Find official colors and logo specifications**
3. **Use appropriate icon from React Icons**
4. **Test in both light and dark themes**
5. **Update the CompanyIcons mapping**

## Maintenance

### Regular Updates
- Update React Icons library regularly
- Add new companies as you gain experience
- Remove unused icons to keep bundle size small
- Test icon rendering after updates

### Performance Monitoring
- Monitor bundle size impact
- Use build tools to analyze icon usage
- Consider icon sprites for frequently used icons

This system provides a scalable, maintainable way to manage icons throughout your portfolio while maintaining consistency and performance.
