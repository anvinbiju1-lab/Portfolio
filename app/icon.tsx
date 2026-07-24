import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default function Icon() {
  // Read the profile image from the public folder
  const imagePath = join(process.cwd(), 'public', 'profile.png');
  const imageBuffer = readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
      >
        <img
          src={base64Image}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
