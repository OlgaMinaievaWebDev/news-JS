import './news.css';
import type { Article } from '../../../types/api';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (!(newsItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('News template is missing or invalid');
        }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (!(newsClone instanceof DocumentFragment)) {
                throw new Error('News template clone  is missing or invalid');
            }
            const newsItem = newsClone.querySelector('.news__item');
            if (!newsItem) throw Error('News item element is missing');
            if (idx % 2) newsItem.classList.add('alt');

            const newsPhoto = newsClone.querySelector('.news__meta-photo');
            if (!(newsPhoto instanceof HTMLElement)) {
                throw new Error('News photo element is missing');
            }
            newsPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const newsAuthor = newsClone.querySelector('.news__meta-author');
            const newsDate = newsClone.querySelector('.news__meta-date');
            const newsTitle = newsClone.querySelector('.news__description-title');
            const newsSource = newsClone.querySelector('.news__description-source');
            const newsContent = newsClone.querySelector('.news__description-content');
            if (!newsAuthor || !newsDate || !newsTitle || !newsSource || !newsContent) {
                throw new Error('News template is missing required text elements');
            }

            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            const newsLink = newsClone.querySelector('.news__read-more a');
            if (!newsLink) {
                throw new Error('News read-more link is missing');
            }
            newsLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (!newsContainer) {
            throw new Error('News container is missing');
        }
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
