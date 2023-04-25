import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function UploadButton() {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Button variant='contained' component='label'>
				Nova Submissão
				<input hidden accept='pdf/*' multiple type='file' />
			</Button>
		</Stack>
	)
}
