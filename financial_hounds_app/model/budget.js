const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    // username of student budget belongs to
    username: {
        type: String,
        required: true,
      },

    disposable_income: {
        type: Number,
    },

    total_expenses: {
        type: Number,
    }
});

const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;