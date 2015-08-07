NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  initialize: function (option) {
    // this.collection = option.collection;
  },

  getOrFetch: function (id) {
    var feed = this.get(id);

    if (!feed){
      feed = new NewsReader.Models.Feed({id: id});
      feed.fetch();
      this.add(feed);
    } else {

      feed.fetch();
    }

    return feed;
  },

});
