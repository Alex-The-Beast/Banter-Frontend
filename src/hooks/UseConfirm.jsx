import { Button } from "@/components/ui/button"
import { Dialog  ,DialogHeader,DialogTitle,DialogContent,DialogFooter,DialogDescription} from "@/components/ui/dialog"
import { useState } from "react"

export const useConfirm=({
    title,
    message
})=>{
    const [promise,setPromise]=useState(null)

    async function confirmation(){
        return new Promise((resolve,reject)=>{
            setPromise({resolve})
        })
    }

    const handleClose=()=>{
        setPromise(null)
    }

    const handleConfirm=()=>{
        promise?.resolve(true)
        handleClose()
    }

    const ConfirmDialog=()=>{
        return (
            <Dialog open={promise !== null} onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{message}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                       <Button onClick={handleClose} variant="secondary">Cancel</Button>
                        <Button onClick={handleConfirm} >Confirm</Button> 
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return {
        confirmation,
        ConfirmDialog
    }
}