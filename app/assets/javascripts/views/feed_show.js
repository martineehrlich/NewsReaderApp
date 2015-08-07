NewsReader.Views.feedShow = Backbone.CompositeView.extend({
  template: JST["feed/feed_show"],

  initialize: function () {
    this.listenTo(this.model, "sync remove", this.render);
  },

  events: {
    "click button.refresh-feed": "refresh",
    "click button.delete-feed": "deleteFeed"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.model.entries().each(function(entry){
      var entryView = new NewsReader.Views.entryItem({model: entry});
      this.$("ul.feed-show").append(entryView.render().$el);
    }.bind(this));

    return this;
  },

  deleteFeed: function () {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  refresh: function() {
    this.model.fetch({
      data: {
        reload: true
      }
    });
  }
});
