# Akash Jaywant Patil — Portfolio

Simple, responsive portfolio for Data Analytics and ML projects.

## Update content
- Edit `index.html` to update bio, add project links, and contact details.
- Replace `assets/profile.jpg` with your photo (optional).

## Deploy on GitHub Pages
1. Create a new public repository on GitHub named `akash-portfolio` (or any name).
2. Push this folder to that repository.
   - If Git is installed:
     ```bash
     git init
     git add .
     git commit -m "feat: initial portfolio"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo>.git
     git push -u origin main
     ```
3. In GitHub → Settings → Pages:
   - Source: `Deploy from a branch`
   - Branch: `main`, folder `/root` → Save
4. Wait ~1 minute; your site will be available at:
   - `https://<your-username>.github.io/<repo>/`

## Customize
- Colors and spacing are in `styles.css` under `:root` variables.
- Add more projects by duplicating a `.card` in the Projects section.

## License
MIT

