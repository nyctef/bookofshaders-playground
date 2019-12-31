#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectFillMask(in vec2 fragCoord,in vec2 pos,in vec2 size){
    
    vec2 bl=step(pos,fragCoord);
    vec2 tr=1.-step(vec2(pos+size),fragCoord);
    return bl.x*bl.y*tr.x*tr.y;
}

float rectMask(in vec2 fragCoord,in vec2 pos,in vec2 size,in float width){
    
    float outside=rectFillMask(fragCoord,pos,size);
    float inside=rectFillMask(fragCoord,pos+width,size-2.*width);
    
    return outside*(1.-inside);
}

void main()
{
    vec2 st=gl_FragCoord.xy/(min(u_resolution.x,u_resolution.y));
    
    float rect1=rectMask(st,vec2(.2),vec2(.4),.04);
    float rect2=rectMask(st,vec2(.4),vec2(.4),.04);
    float red=rectFillMask(st,vec2(.4),vec2(.4));
    
    vec3 color=(1.-rect1-rect2-red)*vec3(1.)+
    red*vec3(1.,0.,0.);
    
    gl_FragColor=vec4(color,1.);
}