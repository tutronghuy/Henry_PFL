import type { MediaShot } from '@/types';
import './DeviceFrame.css';

/**
 * Đặt ảnh chụp màn hình vào khung đúng thiết bị đã chụp:
 * ảnh chụp từ điện thoại vào khung điện thoại, ảnh chụp màn hình laptop vào khung laptop.
 */
export function DeviceFrame({ src, alt, device }: MediaShot) {
  if (device === 'laptop') {
    return (
      <figure className="device device--laptop">
        <div className="device__lid">
          <span className="device__camera" aria-hidden="true" />
          <div className="device__screen">
            <img src={src} alt={alt} loading="lazy" />
          </div>
        </div>
        <div className="device__base" aria-hidden="true">
          <span className="device__notch" />
        </div>
      </figure>
    );
  }

  return (
    <figure className="device device--phone">
      <div className="device__body">
        <span className="device__island" aria-hidden="true" />
        <div className="device__screen">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      </div>
    </figure>
  );
}
