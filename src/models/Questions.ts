import delve from 'dlv';

export default class QuestionModel {
    questions: Array<ObjectArray>;
    constructor(dictionary) {
        this.questions = this._parseQuestions(dictionary.results);
    }

    _parseQuestions(dictionary) {
        if (!dictionary) return [];
        return dictionary.map(item => new DefaultModel(item));
    }
}

class DefaultModel {
    category: string;
    subcategory: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<StringConstructor>;

    constructor(item) {
        const category = item.category.split(':')[0].trim();
        const hasSubcategory = item.category.split(':')[1];

        this.category = !category ? 'Category' : category;
        this.subcategory = !hasSubcategory ? 'General' : hasSubcategory.trim();
        this.type = delve(item, 'type', '');
        this.difficulty = delve(item, 'difficulty', '');
        this.question = delve(item, 'question', '');
        this.correct_answer = delve(item, 'correct_answer', '');
        this.incorrect_answers = delve(item, 'incorrect_answers', []);
    }
}
