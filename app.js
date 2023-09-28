const expenses = [
    {
      id: 1,
      category: "shopping",
      type: "expense",
      amount: 200,
    },
    {
      id: 2,
      category: "invoice",
      type: "income",
      amount:500,
    },
    {
      id: 3,
      category: "sallary",
      type: "income",
      amount:699
    },
  ];
  const express = require("express");
  const app = express();
  
  // json config
  app.use(express.json());
  

  app.post('/api/v1/expenses/',(req,res)=>{

     const body = req.body
    //  if (!body.input) {
    //   res.json("not valid input")
    //  }

    if (!body.amount || !body.type || !body.category) {
      console.log('33');
    }
    expenses.push(body)
    
  })

  app.put('/api/v1/expenses/:expenseId',(req,res)=>{
    const id = req.params.expenseId
    const body = req.body
    const filteredByid = expenses.filter(el=>{
      return el.id == id
    })
    if (filteredByid.length == 0) {
      console.log('egeti expensi ar arsebobs');
      return
    }
    const expense = expenses.map(el=>{
      if (el.id == id) {
        return {
          ...el,
          ...body,
        }
      }
      else{
        return el
      }
    })
    console.log(expense);
  })


  const port = 8080
  app.listen(port, () => {
    console.log(`Example app listening on port `)
  })










    // app.put('/api/v1/expenses/:expenseId', (req, res) => {
  
  //     const id = req.params.expenseId;
  
  //     console.log('id', id)
  
  //     const body = req.body;
  //     console.log('body', body)
  //     const idweneed = expenses.filter(el =>{
  //       return el.id == id
  //     })
  //     console.log(idweneed.length);
  //     if (idweneed.length > 0) {
  //       return expenses.map(el=>{

  //       })
  //     }
  //     console.log(expenses);
  //     res.json({ status: "ok" })
  
  // })