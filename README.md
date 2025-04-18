# Website Hub

A sleek, dark-themed website hub for showcasing my projects. The site features a binary code background with modern, tilt-animated cards for each project.

## Features

- Responsive design that works on all devices
- Dark theme with binary code background
- Animated card transitions with tilt effects
- Project status indicators
- Configurable via JSON and .env files
- Social media links

## Setup

1. Clone this repository
2. Update the `config.json` file with your project information
3. Customize variables in the `.env` file if needed
4. Deploy to your hosting provider of choice

## Configuration

### Project Cards

Edit `config.json` to add, remove, or modify project cards. Each project has the following structure:

```json
{
  "title": "Project Name",
  "description": "Project description goes here",
  "image": "path/to/image.jpg",
  "tags": ["HTML", "CSS", "JavaScript"],
  "status": "Active", // Active, Development, or Archived
  "links": {
    "live": "https://project-url.com",
    "github": "https://github.com/username/project"
  }
}
```

### Environment Variables

Edit `.env` to configure site-wide settings:

```
SITE_TITLE=Your Site Title
SITE_DESCRIPTION=Your site description
...
```

## License

MIT License
