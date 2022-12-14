import { DogCard } from './Dog-Card';
import { Grid } from '@mui/material';

export const DogGrid = ({ dogInfoArr }) => {
  return (
    <Grid container justifyContent='space-around' padding='1rem 2rem 2rem 2rem'>
      {dogInfoArr.map(el => {
        return <Grid padding={2}>
          <DogCard image={el.image?.url ?? ''} firstName={el.name} sex={el.sex} age={el.age} temperament={el.temperament} id={el.id} />
        </ Grid>
      })}
    </Grid>
  )
}
