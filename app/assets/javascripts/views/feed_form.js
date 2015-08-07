NewsReader.Views.feedForm = Backbone.View.extend({
  template: JST["feed/feed_form"],

  events: {
    "submit form": "submitForm"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().feed;
    var newFeed = new NewsReader.Models.Feed(formData);

    this.model.save(formData, {
      success: function(){
        this.collection.add(newFeed);
        Backbone.history.navigate("feeds/" + this.model.id, {trigger: true});
      }.bind(this)
    });
  }
});
