import mongoose from 'mongoose';

const componentType = new mongoose.Schema({
  component: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const imageSrcType = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  text: {
    type: String,
  },
});

const contentSchema = new mongoose.Schema({
  component: {
    type: componentType,
    required: true,
  },
  text: {
    type: String,
  },
  src: {
    type: imageSrcType,
  },
  class: {
    type: String,
  },
  order: {
    type: Number,
  },
});

const articleSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    content: {
      type: contentSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model('posts', articleSchema);
export default Article;
