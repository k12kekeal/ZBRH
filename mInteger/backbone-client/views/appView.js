var AppView = Backbone.View.extend({

  initialize: function() {
    this.transactionListView = new TransactionListView();
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template);
    this.$el.find('#transaction-list').replaceWith(this.transactionListView.$el);
    return this.$el;
  },

  template: `
    <h1>mInteger</h1>
    <div class="app">
      <div id="transaction-list"></div>
      <div class="category">
        <h3>Budget Categories</h3>
        <div class="category-list">
          <div class="category-data">Food</div>
          <div class="category-data">Entertainment</div>
          <div class="category-data">Transportation</div>
          <div class="category-data">Rent</div>
          <div class="category-data">Bills</div>
        </div>
          <div class="category-form">
            <div class="category-input">
            <input
              type="text"
              placeholder="Budget Category"
            />
            <input
              type="number"
              placeholder="Target Budget"
            />
            </div>
            <button>+</button>
          </div>
      </div>
    </div>
  `

});
