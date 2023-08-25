import cards from '../temp/cards.js';
class ToolModel {
    getTools() {
        return cards;
    }

    getToolSystemPrompt() {

    }

    getFeatures() {
        let features = [];

        for (const card of cards) {
            features.push({
                title: card.title,
                description: card.description,
                icon: card.icon,
            });
        }

        return features;
    }
}

export default ToolModel;