/* Fetch SVG icons */
import sanityClient from '../../utils/sanity';

export default async function fetchSVGIcons() {
  const query = `*[_type == "svgIcon"]{
    title,
    icon,                         // inline SVG string (portable text / string)
    "url": file.asset->url        // optional file URL if present in schema
  }`;
  const icons = await sanityClient.fetch(query);
  return icons;
}