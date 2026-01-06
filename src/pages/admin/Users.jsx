import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/user.service";
import UserCard from "../../components/ui/UserCard"

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  console.log(users);

  return (
    <div>
      {users.map(u =>(
        <UserCard key={u.id} user={u}></UserCard>
      ))}
    </div>
  );
}

export default Users;

/*

import React from 'react'
import { useEffect, useState } from "react"
import { getProducts } from "../../services/product.service"

function Products() {

  const [products, setProducts] = useState([])
  
    useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    })
  }, [])

  console.log(products)
  
  return (
    <div>
    {products.map(p =>(
      <div key={p.id}>
        <hr />
        <h2>{p.id}</h2>
        <span>{p.title}</span>
        <span>{p.price}</span>
      </div>
    ))}    
    </div>
  )
}

export default Products

*/
