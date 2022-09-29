import styled from 'styled-components';


export const FormTotal = styled.form`
color: #4a6500;
width: 600px;
margin: 50px auto;
height:80px;
background-color: #efbe61;

`
export const Block = styled.div`
color:  #4a6500;
padding: 20px;
border-radius: 20px;
text-align: center;
background-color: #efbe61;
width: 50%;
margin: 50px auto;
`
export const ListItem = styled.li`
display: flex;
padding-bottom:10px;
justify-content: space-between;
width: 90%;
`
export const InputField = styled.input`
background-color:#ffd56f;
border-radius: 5px;
`

export const Button = styled.button`
margin-left: 20px;
width: 80px;
border-radius: 5px;
background-color: #4a6500;
color:#ffd56f ;
&:hover{
 background-color: #ffd56f;
color: #4a6500;   
}
`
export const InputButton = styled(Button)`
width:100px
`