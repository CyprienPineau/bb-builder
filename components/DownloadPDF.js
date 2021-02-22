import { PDFDownloadLink} from '@react-pdf/renderer'
import { useEffect, useState } from "react"
import styles from './DownloadPDF.module.css'


const DownloadPDF = ({document,title="bbteam"}) => {
    const [isClient, setIsClient] = useState(false)
  
    useEffect(() => {
        setIsClient(true) 
    }, [])
  
    return (
        <>
            {isClient && (
            <PDFDownloadLink document={document} fileName={"bbteam" + title}>
                {({ blob, url, loading, error }) => (loading ? 
                    'Loading document...' 
                    : 
                    <div className={styles.download}>Download Team</div>)}
            </PDFDownloadLink> 
            )}
        </>
    );
}

export default DownloadPDF