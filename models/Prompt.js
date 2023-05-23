import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Um Prompt é obrigatório.'],
  },
  tag: {
    type: String,
    required: [true, 'Uma TAG é obrigatória.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;