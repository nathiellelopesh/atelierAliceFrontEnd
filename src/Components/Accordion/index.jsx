import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicButtons from '../Button';

export default function AccordionUsage({items, handleDeleteContact}) {

  return (
    <div style={styles.container}>
        {items.map((item, index) => {
          //console.log(item); 
            return (
            <Accordion key={index} sx={{padding: '10px 0', margin: '15px 0'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.3em'
              }}
            >
                {item.id} - {item.name}
            </AccordionSummary>
            <AccordionDetails>
                <span style={styles.phone}>{item.phone}</span>
                <p>{item.message}</p>
                <BasicButtons color="success" sx={{margin: '20px'}} onClick={() => handleDeleteContact(item.id)}>Marcar como Respondido</BasicButtons>
                {/*item.image && <img src={item.image} alt={`Imagem de ${item.name}`} />*/}
            </AccordionDetails>
          </Accordion>
            )
        })}
      
    </div>
  );
}

const styles = {
    container: {
        width: '60%',
        margin: '35px auto'
    },
    phone: {
        color: 'black',
        fontWeight: '700',
        marginBottom: '20px',
        display: 'block'
    }
}
