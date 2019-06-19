import React,{useContext} from 'react';
import {Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink} from '@material-ui/core';
import {FitnessContext} from '../../contex';



const style={
    Paper:{padding:20, marginTop:10, marginBottom:10, height:500, overflowY:'auto', marginLeft:0}
};

const Exercises = (props) => {

    const context=useContext(FitnessContext);
    const { muscles, exercises, selectedExercise}=context;

    return (
        <Grid container>
            <Grid item xs>
                <Paper style={style.Paper}>
                    {muscles.map(muscle=>{
                        return( <React.Fragment key={muscle}>
                                  <Typography variant="h5" style={{textTransform:'capitalize'}}>
                                    {muscle}
                                  </Typography>
                                  <List component="ul">
                                    {exercises.map((exercise,index)=>{
                                        if(exercise.muscles===muscle){
                                            return ( <ListItem button key={exercise.id} onClick={()=>context.onSelectExerciseHandler(exercise.id)}>
                                                        <ListItemText primary={exercise.title} />
                                                     </ListItem> );
                                        }
                                      })
                                    }
                                  </List>
                                </React.Fragment> );
                      })
                    }
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper style={style.Paper}>
                    <Typography variant="h4" style={{marginTop:'20px'}}>{selectedExercise? selectedExercise.title:'Welcome'}</Typography>
                    <Typography variant="body1">{selectedExercise? '':'Please select exercise from the list on the left'}{selectedExercise? selectedExercise.description:''}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Exercises;
