NewsReader.Views.feedIndex = Backbone.CompositeView.extend({
  template: JST["feed/feed_index"],
  tagName: "div",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addFeedView);
    this.listenTo(this.collection, "remove", this.removeFeedView);
    this.collection.each(this.addFeedView.bind(this));
    this.addFormView();
  },

  // events: {
  //   "click button.delete-feed": "deleteFeed"
  // },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addFeedView: function (feed) {
    var subview = new NewsReader.Views.IndexItem({
      model: feed,
      collection: this.collection});
    this.addSubview('.index-list', subview);
  },

  addFormView: function () {
    var model = new NewsReader.Models.Feed();
    var subview = new NewsReader.Views.feedForm({collection: this.collection, model: model});
    this.addSubview('.feed-new', subview);
  },

  // deleteFeed: function (e) {
  //   var id = $(e.currentTarget).parent().data("feed");
  //   this.collection.get(id).destroy();
  // },

  removeFeedView: function (feed) {
    this.removeModelSubview('.index-list', feed);
  }
});
