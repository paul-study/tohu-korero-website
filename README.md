# Tohu Korero

The Tohu Korero landing page is a gateway to projects including [Z Axis Customs](https://zaxiscustoms.netlify.app/) and the Tohu Korero NZSL accessibility project.

- Website: [tohukorero.com](https://tohukorero.com)
- NZSL prototype: currently offline while updates are underway
- Contact: [paul@tohukorero.com](mailto:paul@tohukorero.com)

## Development

Built with React and hosted on Netlify.

```bash
npm install
npm start
npm test
npm run build
```

The contact form uses the existing EmailJS service, template, public key and recipient configuration in `src/App.js`. Keep those settings and the template's `from_name`, `from_email`, `message` and `to_email` fields compatible when changing the form. The public contact address is separate from the configured form recipient; verify delivery before changing either. Website changes do not require changes to domain email or DNS.

The NZSL project uses data from the NZSL Online Dictionary maintained by the Deaf Studies Research Unit at Victoria University of Wellington. The prototype is offline while licensing compliance and data handling are being updated.
