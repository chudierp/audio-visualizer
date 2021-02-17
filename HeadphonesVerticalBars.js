
// *************************************************************
// Draw headphones
// Draw some bars in a rainbow

function render(frequencyArray, ctx, centerX, centerY, radius) {
    ctx.clearRect(0, 0, 400, 400)

	ctx.beginPath()
	ctx.arc(150, 125, 70, Math.PI, Math.PI * 2, false)
	ctx.strokeStyle = '#000'
	ctx.lineWidth = 10
	ctx.stroke()
    // Draw left headphone
    ctx.beginPath()
	ctx.arc(75, 150, 30, Math.PI * .5, Math.PI * 1.6, false)
	ctx.strokeStyle = '#000'
	ctx.lineWidth = 3
	ctx.stroke()
    // Draw right headphone
    ctx.beginPath()
	ctx.arc(220, 150, 30, Math.PI * 1.5, Math.PI * 2.5, false)
	ctx.strokeStyle = '#000'
	ctx.stroke()
	// Left headphone
	ctx.fillRect(70, 120, 25, 62, 20, 20, 20, 20)
	ctx.strokeStyle = '#000'
	ctx.stroke()
	// Right headphone
	ctx.fillRect(203, 120, 25, 62, 20, 20, 20, 20)
	ctx.strokeStyle = '#000'
	ctx.stroke()


	const bars = frequencyArray.length
	const barMaxLength = (300 - radius) / 2
	const step = Math.PI * 2 / bars

	// Loop over the data
	frequencyArray.forEach((f, i) => {
		// normalize the value to the range
	const barLength = f / 255 * barMaxLength // 0.0 - 1.0 * barMaxLength
	
	// plot starting and ending points. Map these around a circle
	const x1 = (Math.cos(step * i) * radius) + centerX
	const y1 = (Math.sin(step * i) * radius) + centerY
	const x2 = (Math.cos(step * i) * (radius + barLength)) + centerX
	const y2 = (Math.sin(step * i) * (radius + barLength)) + centerY

		
		
		// Things to do
		// ctx.strokeStyle - stroke color
		// ctx.strokeWidth - stroke width
		// ctx.arc(x, y, radius, 0, Math.PI * 2) - draw a cricle at x, y of radius
		// ctx.rect(x, y, width, height) - draw rectangle 
		// ctx.fillStyle - fill color
		// ctx.fill() - fills with style 
		// draw the paths 
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
	})
		
	// Stroke the paths
	ctx.stroke()
		
	}
		
	

export default render