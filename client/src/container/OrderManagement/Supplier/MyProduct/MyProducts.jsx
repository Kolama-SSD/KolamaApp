import React from 'react';
import { Link } from 'react-router-dom';
import './MyProducts.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../../utils/getCurrentUser';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Swal from 'sweetalert2';

function MyProducts() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/adds?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Confirm To Delete',
      text: 'Are You Sure You Want To Delete This Product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
      }
    });
  };
  const deleteItem = async (id) => {
    try {
      await newRequest.delete(`/adds/${id}`);
      queryClient.invalidateQueries(['myProducts']);
      toast.success('Item deleted successfully!');
    } catch (error) {
      console.log('Error deleting item:', error);
      toast.error('Error deleting item');
    }
  };

  const handleUpdate = (id) => {
    console.log('my productID', id);
    navigate(`updateproduct/${id}`);
  };
  return (
    <>
      <div className='myProducts'>
        {isLoading ? (
          'loading'
        ) : error ? (
          'error'
        ) : (
          <div className='container_table'>
            <div style={{ marginBottom:"100px", height:"72vw" }} className='table'>
              <div style={{ marginBottom:"30vh" }} className='table_header'>
                <h1>Sri Lankan Kolam Products</h1>
                <Link to='/supplier/add'>
                  <button className='button'>Add New Product</button>
                </Link>
              </div>
              <div className='table_body'>
                <table style={{ marginBottom:"10px" }} >
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'center', fontSize: '20px' }}>
                        Image Of Product
                      </th>
                      <th style={{ textAlign: 'center', fontSize: '20px' }}>
                        Name
                      </th>
                      <th style={{ textAlign: 'center', fontSize: '20px' }}>
                        Price(LKR)
                      </th>
                      <th style={{ textAlign: 'center', fontSize: '20px' }}>
                        Sales
                      </th>
                      <th style={{ textAlign: 'center', fontSize: '20px' }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((add) => (
                      <tr key={add._id}>
                        <td style={{ textAlign: 'center' }}>
                          <img className='img' src={add.cover} alt='item img' />
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <strong>{add.title}</strong>
                        </td>
                        <td style={{ textAlign: 'center' }}>{add.price}</td>
                        <td style={{ textAlign: 'center' }}>{add.sales}</td>

                        <td>
                          <div className='actionBtn'>
                            <IconButton onClick={() => handleDelete(add._id)}>
                              {' '}
                              <DeleteForeverIcon
                                style={{ color: 'red', marginRight: '1vh' }}
                              />
                            </IconButton>
                            <IconButton onClick={() => handleUpdate(add._id)}>
                              {' '}
                              <EditIcon
                                style={{ color: 'yellow', marginLeft: '1vh' }}
                              />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default MyProducts;
