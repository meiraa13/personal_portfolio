import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

export const Button = styled('button', {
    height: "2.75rem",
    appearance: "none",
    background: "$whiteFixed",
    color: "$mode",
    fontWeight: "600",
    padding: "0 2rem",
    border: "2px solid $whiteFixed",
    borderRadius: "$1",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "$texts",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",

    variants: {
        type: {
            btLink: {
                backgroundColor: "$grey1",
                borderColor: "transparent",
                "&:hover":{
                    background:"$grey2"
                }
            },
            primary: {
                background: "$brand1",
                borderColor: "$brand1",
                color: "$grey1",
                "&:hover": {
                    borderColor: "$mode",
                }
            },
            icon: {
                borderColor: "$grey5",
                backgroundColor: "transparent",
                "&:hover": {
                    backgroundColor: "$grey2",
                }
            },
            circle: {
                borderColor: "$grey1",
                backgroundColor: "$whiteFixed",
                color: "$grey1",
                borderRadius: "50%",
                padding: "0",
                width: "2.75rem",
                height: "2.75rem",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            }
        },
        ...colors
    }
})