avelino cortina — portfolio
───────────────────────────

how to use:
1. drop ALL of these files into your site's root folder
   (the same folder that contains your existing /assets directory).
   they replace your old html files — back those up first if you want them.

2. everything references your existing assets:
   assets/img/..., assets/video/..., assets/audio/..., assets/pdf/...
   nothing to rename.

3. pages marked with <!-- replace with your copy --> have placeholder
   writing (ymca, realreal, widgetwakeup, tents, wallcoffee, neuehaasbook).
   swap in your real project text whenever.

files:
- index.html ............... main one-page portfolio
- project.css / theme.js .... shared styles + behavior for project pages
- 15 project pages (incl. goodgraces.html case study) + bible.html (zine)
- new project images load from your live site (ac-iv.github.io) — swap to local copies anytime

the color system:
background orbs are anchored to the page — edit positions/colors inline in each page's <div class="bubbles"> markup. glow accents (--hue) still drift with scroll.
to change the starting color or speed, edit the hue values at the
top of theme.js and in index.html's script.
