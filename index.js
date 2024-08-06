const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
  try {
    const { data } = await axios.get('https://bingotingo.com/best-social-media-platforms/');
    const $ = cheerio.load(data);
    const link = $('a.su-button.su-button-style-soft.su-button-wide').attr('href');
    console.log(`Scraped link: ${link || 'Link not found'}`);
  } catch (error) {
    console.error('Error scraping the page:', error);
  }
}

scrape();
