import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import './SingleUserPage.css'


export default function SingleUserPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(useSearchParams())
  const id = searchParams.get("id");
  const page = searchParams.get('page')
  console.log(id,page)
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://reqres.in/api/users?page=${page}&id=${id}`);
        
        const data = await response.json();
        console.log(data.data)
        setUser(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id,page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <h1>User not found</h1>;
  }

 
  return (
  
    <div className='border'>
      <div className="image-avatar">
        <img src={user.avatar} alt={user.first_name} className="img"/>
      </div>
      <h2>Name : {user.first_name} {user.last_name}</h2>
      <h2>Email : {user.email}</h2>
      
    </div>
    
  );
}
