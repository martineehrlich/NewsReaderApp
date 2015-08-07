NewsReader.Views.entryItem = Backbone.View.extend({
  template: JST["feed/entry_item"],

  tagName: "li",

  events: {
    "click button.delete-feed": "deleteFeed"
  },


  render: function () {
    var content = this.template({model: this.model});
    this.$el.html(content);
    return this;
  },

  
});
