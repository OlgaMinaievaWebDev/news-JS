import './sources.css';
import type { Source } from '../../../types/api';
class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Source template is missing or invalid');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (!(sourceClone instanceof DocumentFragment)) {
                throw new Error('Source clone must be a document fragment');
            }

            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');
            if (!sourceName || !sourceItem) {
                throw new Error('Source template is missing required elements');
            }

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources')
        if(!sourcesContainer)throw Error('Sources container is missing');
        sourcesContainer.append(fragment);
    }
}

export default Sources;
