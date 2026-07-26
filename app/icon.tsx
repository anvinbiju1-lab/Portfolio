import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default function Icon() {
  // Read the anvinbiju image from the public folder specifically for the favicon
  const imagePath = join(process.cwd(), 'public', 'anvinbiju.png');
  const imageBuffer = readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: 'transparent',
        }}
      >
        <img
          src={base64Image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
