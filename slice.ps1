Add-Type -AssemblyName System.Drawing
$imgPath = 'C:\Users\Govind Swami\.gemini\antigravity-ide\brain\a727ae42-6b03-49cd-8ed5-b9836eea149a\.user_uploaded\media_1791870528474.png'
$outDir = 'C:\Users\Govind Swami\.gemini\antigravity-ide\brain\a727ae42-6b03-49cd-8ed5-b9836eea149a\scratch'
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir }

$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)
$w = $bmp.Width
$h = $bmp.Height
Write-Host "Image size: $w x $h"

$slices = 6
$sliceH = [Math]::Floor($h / $slices)

for ($i = 0; $i -lt $slices; $i++) {
    $y = $i * $sliceH
    $targetH = if ($i -eq $slices - 1) { $h - $y } else { $sliceH }
    $rect = New-Object System.Drawing.Rectangle(0, $y, $w, $targetH)
    $part = $bmp.Clone($rect, $bmp.PixelFormat)
    $outPath = Join-Path $outDir "slice_$($i+1).png"
    $part.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $part.Dispose()
    Write-Host "Saved $outPath"
}
$bmp.Dispose()
Write-Host "All slices complete!"
