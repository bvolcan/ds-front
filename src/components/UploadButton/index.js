import * as React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import Stack from '@mui/material/Stack'

export default function UploadButton() {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Button variant='contained' component='label'>
				Nova Submissão
				<input hidden accept='pdf/*' multiple type='file' />
			</Button>
			{/* <IconButton color='primary' aria-label='upload file' component='label'>
				<input hidden accept='pdf/*' type='file' />
				<PictureAsPdfIcon />
			</IconButton> */}
		</Stack>
	)
}
