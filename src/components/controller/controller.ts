import AppLoader from './appLoader';
import type { SourcesResponse, ApiCallback, NewsResponse } from '../../types/api';
import { Endpoint } from '../../types/api';

class AppController extends AppLoader {
    getSources(callback: ApiCallback<SourcesResponse>) {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: ApiCallback<NewsResponse>) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!(target instanceof Element) || !(newsContainer instanceof Element)) {
            return;
        }
        while (target instanceof Element && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
