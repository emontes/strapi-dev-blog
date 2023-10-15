import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'check';
  };
  attributes: {
    heading: Attribute.String;
    featuredPosts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'twitter';
  };
  attributes: {
    socialMedia: Attribute.Enumeration<
      ['github', 'x', 'facebook', 'whatsapp']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_featured_courses';
  info: {
    displayName: 'featuredCourse';
    icon: 'server';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-course',
      'oneToOne',
      'api::course.course'
    >;
    heading: Attribute.String;
    announcement: Attribute.Text;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'calendar';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'collapse';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Mission'>;
    content: Attribute.Text & Attribute.Required;
    showLogo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsLetterForm extends Schema.Component {
  collectionName: 'components_layout_news_letter_forms';
  info: {
    displayName: 'newsLetterForm';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
  };
}

export interface LayoutPageInfo extends Schema.Component {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'pageInfo';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.RichText;
    cover: Attribute.Media;
    seo: Attribute.Component<'seo.seo-information'>;
  };
}

export interface LayoutServicePreview extends Schema.Component {
  collectionName: 'components_layout_service_previews';
  info: {
    displayName: 'servicePreview';
    icon: 'bulletList';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.service-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.news-letter-form': LayoutNewsLetterForm;
      'layout.page-info': LayoutPageInfo;
      'layout.service-preview': LayoutServicePreview;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
