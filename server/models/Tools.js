import cards from '../temp/cards.js';
class ToolModel {
    getTools() {
        return cards;
    }

    getFeatures() {
        const features = [];
        for ( const card of cards) {
            features.push({
                title: card.title,
                description: card.description,
                icon:card.icon
            })
        }
        return features;
    }
}

export default ToolModel;