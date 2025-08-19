# Waterloo Track Website

Complete Astro static site for track.waterloo.digital - Attribution landing pages and marketing site.

## Project Overview

This is a complete rebuild of the Waterloo Track marketing site using Astro for static site generation. The site focuses on attribution solutions for three primary customer segments:

- **Marketing Agencies** - Partnership model for recurring revenue
- **Business Owners** - Direct attribution solutions 
- **Marketing Directors** - Enterprise-grade attribution reporting

## Site Structure

```
src/
├── layouts/
│   └── Layout.astro          # Main layout with GTM and styling
├── pages/
│   ├── index.astro           # Homepage
│   ├── for-agencies.astro    # Agency partnership landing page
│   ├── for-business-owners.astro    # SMB landing page
│   ├── for-marketing-directors.astro # Enterprise landing page
│   └── contact.astro         # Contact form and audit offer
```

## Key Features

- **Server-Side Rendered Static Site** - Fast loading, SEO optimized
- **Brand Styling** - Teal (#7cd3d2) and yellow (#eed36b) brand colors
- **Neue Kabel Typography** - Custom font implementation via Typekit
- **Google Tag Manager Integration** - Full tracking setup (GTM-T3RVDSL)
- **Mobile Responsive** - Optimized for all device sizes
- **Lead Capture Forms** - Contact forms for attribution audits
- **Bourdain-Style Copy** - Direct, conversational tone throughout

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

- **Node.js**: Version 18 or higher required
- **Package Manager**: npm (yarn or pnpm also work)
- **Build Tool**: Astro 5.x

## Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub if not already done
   git remote add origin https://github.com/yourusername/track-waterloo-digital.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Import project from GitHub in Vercel dashboard
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Custom Domain Setup**
   - Add custom domain: `track.waterloo.digital`
   - Update DNS to point to Vercel:
     - Type: CNAME
     - Name: track
     - Value: cname.vercel-dns.com

### Alternative: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

2. **Domain Configuration**
   - Add custom domain in Netlify dashboard
   - Configure DNS as instructed

## Content Strategy

### Brand Positioning
- **Primary Value Prop**: First-party attribution that actually works
- **Key Differentiator**: Easier approach to complex attribution (vs. Stape partnership model)
- **Target Pain Point**: 30% attribution loss from iOS 14+ and privacy updates

### Customer Segments

1. **Agencies** - Focus on recurring revenue partnership model
2. **Business Owners** - Focus on stopping wasted ad spend
3. **Marketing Directors** - Focus on boardroom-ready data and executive credibility

### Conversion Flow
1. Landing page for specific segment
2. Free attribution audit offer
3. Contact form with detailed qualification questions
4. 30-minute strategy call
5. Custom implementation proposal

## Technical Implementation

### Styling Approach
- CSS-in-JS within Astro components
- Custom CSS properties for brand colors
- Mobile-first responsive design
- Semantic HTML structure

### Performance Optimizations
- Static site generation for fast loading
- Optimized image handling
- Minimal JavaScript footprint
- Clean HTML output

### Tracking & Analytics
- Google Tag Manager integration
- Form submission tracking
- Page view and engagement events
- Attribution tracking setup

## Form Integration

Contact form currently uses Formspree placeholder. Update the form action URL in `src/pages/contact.astro`:

```astro
<form action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
```

Alternative form services:
- Netlify Forms (if hosting on Netlify)
- HubSpot Forms
- Gravity Forms (WordPress integration)

## Brand Assets

### Colors
- Primary: #7cd3d2 (Teal)
- Secondary: #eed36b (Yellow) 
- Dark: #333333
- Background Alt: #f8f9fa

### Typography
- Primary Font: "neue-kabel" (via Typekit)
- Fallback: -apple-system, BlinkMacSystemFont, sans-serif

### Typekit Integration
Current Typekit Kit ID: `kqv8nxr`
Update if needed in `src/layouts/Layout.astro`

## Deployment Checklist

- [ ] Update form action URLs with real form service
- [ ] Test GTM tracking in production
- [ ] Verify custom font loading
- [ ] Test mobile responsiveness
- [ ] Check page load speeds
- [ ] Verify SSL certificate for custom domain
- [ ] Test contact form submissions
- [ ] Set up form notification emails
- [ ] Configure analytics and tracking
- [ ] Test all internal links
- [ ] Verify meta tags and SEO

## Maintenance

### Regular Updates
- Monitor Astro version updates
- Check dependency security updates
- Review and update content quarterly
- Monitor form submission rates
- Track conversion rates by landing page

### Performance Monitoring
- Page load speeds
- Core Web Vitals
- Mobile usability
- Form completion rates

## Support

For technical issues or questions about the implementation:
- Review Astro documentation: https://docs.astro.build
- Check Vercel deployment docs: https://vercel.com/docs
- Contact development team for custom modifications

---

**Ready to deploy**: This site is production-ready and optimized for conversion tracking and lead generation.
