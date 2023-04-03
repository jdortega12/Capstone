const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    // username of student budget belongs to
    username: {
        type: String,
        required: true,
      },
    
    take_home_pay: {
        type: Number,
      },

    total_fixed_expenses: {
        type: Number,
    },

    total_variable_expenses: {
        type: Number,
    },

    total_expenses: {
        type: Number,
    },

    disposable_income: {
        type: Number,
    }
});

const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;